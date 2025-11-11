#!/usr/bin/env node

/**
 * Test script to verify Vercel API endpoint functionality
 * This tests the /api/submit-form endpoint on the deployed Vercel instance
 */

const PRODUCTION_URL = "https://fall-river-laundry-love-site-p4riuylyu.vercel.app";

async function testAPIEndpoint() {
  console.log("🧪 Testing Vercel API Endpoint...\n");
  console.log(`Target: ${PRODUCTION_URL}/api/submit-form\n`);

  // Test 1: Valid submission
  console.log("Test 1: Valid form submission");
  try {
    const response = await fetch(`${PRODUCTION_URL}/api/submit-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: "Test User (Vercel API Test)",
        phoneNumber: "+1 (555) 123-4567",
        livingSituation: "Homed",
      }),
    });

    const data = await response.json();
    console.log(`Status: ${response.status}`);
    console.log(`Response:`, JSON.stringify(data, null, 2));
    
    if (response.ok && data.success) {
      console.log("✅ Test 1 PASSED: Valid submission successful\n");
    } else {
      console.log("❌ Test 1 FAILED: Expected success response\n");
      return false;
    }
  } catch (error) {
    console.log("❌ Test 1 FAILED:", error.message, "\n");
    return false;
  }

  // Test 2: Invalid submission (missing fields)
  console.log("Test 2: Invalid submission (missing fields)");
  try {
    const response = await fetch(`${PRODUCTION_URL}/api/submit-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: "Test User",
      }),
    });

    const data = await response.json();
    console.log(`Status: ${response.status}`);
    console.log(`Response:`, JSON.stringify(data, null, 2));
    
    if (response.status === 400 && !data.success) {
      console.log("✅ Test 2 PASSED: Validation error handled correctly\n");
    } else {
      console.log("❌ Test 2 FAILED: Expected 400 validation error\n");
      return false;
    }
  } catch (error) {
    console.log("❌ Test 2 FAILED:", error.message, "\n");
    return false;
  }

  // Test 3: Wrong HTTP method
  console.log("Test 3: Wrong HTTP method (GET instead of POST)");
  try {
    const response = await fetch(`${PRODUCTION_URL}/api/submit-form`, {
      method: "GET",
    });

    const data = await response.json();
    console.log(`Status: ${response.status}`);
    console.log(`Response:`, JSON.stringify(data, null, 2));
    
    if (response.status === 405) {
      console.log("✅ Test 3 PASSED: Method not allowed handled correctly\n");
    } else {
      console.log("❌ Test 3 FAILED: Expected 405 method not allowed\n");
      return false;
    }
  } catch (error) {
    console.log("❌ Test 3 FAILED:", error.message, "\n");
    return false;
  }

  return true;
}

// Run tests
testAPIEndpoint()
  .then((success) => {
    if (success) {
      console.log("🎉 All tests passed! Vercel API is working correctly.");
      process.exit(0);
    } else {
      console.log("❌ Some tests failed. Please check the API configuration.");
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error("❌ Test execution failed:", error);
    process.exit(1);
  });
