

/**
 * Sends request to simmlerets 
 *
 */
async function getPropertiesListingApi() {
  const options = {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + btoa("simplyrets:simplyrets"),
    }
  }
  try {
    const response = await fetch("https://api.simplyrets.com/properties​?count=true", options);
    if (response.ok) {
      return response.json();
    }
  } catch (err) {
    throw err;
  }
}

export default getPropertiesListingApi;