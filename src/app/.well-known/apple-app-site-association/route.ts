import { NextResponse } from 'next/server';

export async function GET() {
  const association = {
    applinks: {
      apps: [],
      details: [
        {
          appID: "V5VT48Q5X3.com.Schopi",
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

