import { NextRequest, NextResponse } from 'next/server';
import axiosInstance from '../../../lib/axiosInstance';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');
    let url = query ? `/pokemon/${query}` : '/pokemon'

      try {
        const response = await axiosInstance.get(url);
        const results = response.data.results;
        return NextResponse.json(results, { status: 200 });
      } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
      }

  };