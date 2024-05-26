"use strict";
	
module.exports.send = async (event) => {
  try {
    validateEvent()
    
    const body = JSON.stringify(event?.body)
    return {
      statusCode: 200,
      body
    };
    
  } catch (error) {
    console.log(error.message)
  }
};

const validateEvent = event => {
  if(!event) throw new Error("EVENT_NOT_FOUND")
  if(event.routeKey != "POST /create") throw new Error("ROUTE_NOT_FOUND")
  if(event.body) throw new Error("BODY_NOT_FOUND")
}