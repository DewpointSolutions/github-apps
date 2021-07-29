import * as aws from "aws-sdk";

import Bugsnag from "@bugsnag/js";
import { UpdateItemOutput } from "aws-sdk/clients/dynamodb";

export async function incrementStat({
  ddb,
  name,
  add,
}: {
  ddb: aws.DynamoDB;
  name: string;
  add: number;
}): Promise<UpdateItemOutput> {
  if (!name) {
    const error = new Error("missing user name to update");
    Bugsnag.notify(error);
    return Promise.reject(error);
  }

  const expressionAttributeValues = {
    ":add": {
      N: `${add}`,
    },
  };

  console.log(`incrementing stat ${name} by ${add}`);

  return await ddb
    .updateItem({
      TableName: `stats-${process.env.S_STAGE}`,
      Key: { Name: { S: name } },
      UpdateExpression: "ADD NumberValue :add",
      ExpressionAttributeValues: expressionAttributeValues as any,
    })
    .promise();
}
