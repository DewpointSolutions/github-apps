export default function ({
  body,
}: {
  body: unknown;
}): AWSLambda.APIGatewayEvent {
  // TODO: add in stub the rest of the properties here

  return {
    body: JSON.stringify(body),
  } as AWSLambda.APIGatewayEvent;
}
