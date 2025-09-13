// Mock data for testing without wallet connection
const MOCK_SALE_DATA = {
  tokenPrice: "0.01",
  tokensLeft: "750000",
  totalTokens: "1000000",
  tokensSold: "250000",
  saleStart: new Date(Date.now() - 24 * 60 * 60 * 1000), // Started yesterday
  saleEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Ends in 7 days
  minContribution: "0.001",
  maxContribution: "10",
}

// Mock provider functions
export const getProvider = () => {
  throw new Error("MetaMask not found - using mock data for testing")
}

export const getSigner = async () => {
  throw new Error("MetaMask not found - using mock data for testing")
}

export const getIdoContract = async (withSigner = false) => {
  throw new Error("Contract not available - using mock data for testing")
}

export const getTokenContract = async (withSigner = false) => {
  throw new Error("Contract not available - using mock data for testing")
}

// Format functions (simplified without ethers)
export const formatEther = (value: bigint | string) => {
  return "0.0" // Mock value
}

export const parseEther = (value: string) => {
  return BigInt(0) // Mock value
}

export const formatTokens = (value: bigint | string, decimals = 18) => {
  return "0" // Mock value
}

export const parseTokens = (value: string, decimals = 18) => {
  return BigInt(0) // Mock value
}

// Mock balance functions
export const getEthBalance = async (address: string) => {
  return "1.5" // Mock ETH balance
}

export const getTokenBalance = async (address: string) => {
  return "1000" // Mock token balance
}

import { readContract } from 'wagmi/actions'
import { CONTRACTS, TOKEN_ABI } from './contracts'

export const getTokenSymbol = async () => {
  try {
    const symbol = await readContract({
      address: CONTRACTS.TOKEN_ADDRESS,
      abi: TOKEN_ABI,
      functionName: 'symbol',
    })
    return symbol as string
  } catch (error) {
    console.error('Error fetching token symbol:', error)
    return 'IMPT'
  }
}

export const getTokenName = async () => {
  try {
    const name = await readContract({
      address: CONTRACTS.TOKEN_ADDRESS,
      abi: TOKEN_ABI,
      functionName: 'name',
    })
    return name as string
  } catch (error) {
    console.error('Error fetching token name:', error)
    return 'Impact Token'
  }
}

// Mock sale data
export const getIdoSaleData = async () => {
  return MOCK_SALE_DATA
}

// Mock buy function
export const buyTokens = async (ethAmount: string) => {
  throw new Error("Wallet not connected - this is a demo version")
}

export const getUserContribution = async (address: string) => {
  return "0.5" // Mock contribution
}

export const validateNetwork = async () => {
  throw new Error("Please connect MetaMask and switch to Sepolia testnet")
}
