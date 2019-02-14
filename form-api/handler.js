"use strict";

const aws = require("aws-sdk");
const ses = new aws.SES();
const uuid = require("uuid");
var dynamodb = new AWS.DynamoDB.DocumentClient();

const myEmail = "awscommunityday2019@gmail.com";
const myDomain = "*";

// function generateResponse(code, payload) {
// 	return {
// 		statusCode: code,
// 		headers: {
// 			"Access-Control-Allow-Origin": myDomain,
// 			"Access-Control-Allow-Headers": "x-requested-with",
// 			"Access-Control-Allow-Credentials": true
// 		},
// 		body: JSON.stringify(payload)
// 	};
// }

// function generateError(code, err) {
// 	console.log(err);
// 	return {
// 		statusCode: code,
// 		headers: {
// 			"Access-Control-Allow-Origin": myDomain,
// 			"Access-Control-Allow-Headers": "x-requested-with",
// 			"Access-Control-Allow-Credentials": true
// 		},
// 		body: JSON.stringify(err.message)
// 	};
// }

function generateEmailParams(body) {
	const { email } = JSON.parse(body);
	console.log(email);
	if (!email) {
		throw new Error("Missing parameters! Make sure to add parameters 'email'");
	}

	return {
		Source: myEmail,
		Destination: { ToAddresses: [myEmail] },
		ReplyToAddresses: [email],
		Message: {
			Body: {
				Text: {
					Charset: "UTF-8",
					Data: `Message sent from email ${email}`
				}
			},
			Subject: {
				Charset: "UTF-8",
				Data: `You received a message from ${myDomain}!`
			}
		}
	};
}

module.exports.send = async (event, context, callback) => {
	const emailParams = generateEmailParams(event.body);
	var params = {
		Item: {
			emailId: uuid.v1(),
			email: emailParams
		},
		TableName: "AWS-Community-Day"
	};
	dynamodb.put(params, function(err, data) {
		callback(err, data);
	});

	// try {
	// 	console.log(emailParams);

	// 	// const data = await ses.sendEmail(emailParams).promise();
	// 	return generateResponse(200, data);
	// } catch (err) {
	// 	return generateError(500, err);
	// }

	// Use this code if you don't use the http event with the LAMBDA-PROXY integration
	// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
