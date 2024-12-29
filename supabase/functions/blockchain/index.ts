import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { ethers } from 'npm:ethers'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// ABI for the governance contract (simplified version)
const GOVERNANCE_ABI = [
  "function getProposals() view returns (tuple(uint256 id, string title, string description, address proposer, uint256 startTime, uint256 endTime, bool executed)[] memory)",
  "function getVotes(uint256 proposalId) view returns (uint256 forVotes, uint256 againstVotes)",
  "function state(uint256 proposalId) view returns (uint8)",
]

const GOVERNANCE_CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS" // Replace with actual address
const RPC_URL = "YOUR_RPC_URL" // Replace with actual RPC URL

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const provider = new ethers.JsonRpcProvider(RPC_URL)
    const contract = new ethers.Contract(GOVERNANCE_CONTRACT_ADDRESS, GOVERNANCE_ABI, provider)

    const url = new URL(req.url)
    const action = url.searchParams.get('action')

    let result
    switch (action) {
      case 'getProposals':
        result = await contract.getProposals()
        break
      case 'getVotes':
        const proposalId = url.searchParams.get('proposalId')
        result = await contract.getVotes(proposalId)
        break
      case 'getState':
        const pId = url.searchParams.get('proposalId')
        result = await contract.state(pId)
        break
      default:
        throw new Error('Invalid action')
    }

    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error) {
    console.error('Error:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})