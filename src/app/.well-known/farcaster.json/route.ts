export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
    header: "eyJmaWQiOjI5MTc1MiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDE0Mzc2NjcwMjQ3Mzc0MWM2ODIzYzBjMUVBMTRjOTg3NTFFNjBFRTAifQ",
    payload: "eyJkb21haW4iOiJkb3RzdGFja3MudmVyY2VsLmFwcCJ9",
    signature: "MHg5NzFmNmUwMDljMGY0ZjFjYWI4MmU0NjcwOTliNzMzYWQwZWIzNzFhMzI3MDNjYzY0NDBlNThjYjc1NWQ3YWE3NGRhZDU3MTkzMDc0ZWU4ZTM1Y2JhMzVkYmQ3ZWNhMGUxMTAxMDEwYjIzZjYxYmE0NmU1NDk4OTEzMzc5MTM1NjFi",
    },
    frame: {
      version: "1",
      name: "STACK GAME",
      iconUrl: `${appUrl}/icon.jpg`,
      splashImageUrl: `${appUrl}/splash.jpg`,
      splashBackgroundColor: "#000000",
      homeUrl: appUrl,
    },
  };

  return Response.json(config);
}