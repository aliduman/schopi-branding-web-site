import { NextResponse } from 'next/server';

export async function GET() {
  const association = {
    applinks: {
      apps: [],
      details: [
        {
          appID: "com.Schopi",
          paths: ["/invite"]
        }
      ]
    }
  };

  return NextResponse.json(association, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

