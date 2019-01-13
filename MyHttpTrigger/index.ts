import { SearchService } from 'azure-search-client';

const apiKey = process.env.API_KEY as string;


interface Document {
    key: string;
    code: string;
    address: string
  }

export async function run (context: any, req: any) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const client = new SearchService('address-fieldnotesjp', apiKey);
    const resp = await client.indexes.use<Document>('postcode').search({
        search: req.query.name,
    });

    context.res = {
        status: 200,
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(resp.result.value)
    };
};