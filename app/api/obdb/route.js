import fs from "fs";

export async function POST(request) {
    try {
        const csvFile = fs.createReadStream(`${process.cwd()}/public/ObesityDataSet.csv`);
        return NextResponse
          .status(200)
          .setHeader("Content-Type", "text/csv")
          .setHeader("Content-Disposition", `attachment; filename=ObesityDataSet.csv`)
          .send(csvFile);
      } catch (error) {
        return NextResponse.status(400).json({ error });
      }
}

export async function GET(res, req) {
  try {
      const csvFile = fs.createReadStream(`${process.cwd()}/public/ObesityDataSet.csv`);
      /*return NextResponse
        .status(200)
        .setHeader("Content-Type", "text/csv")
        .setHeader("Content-Disposition", `attachment; filename=GlobalYouTubeStatistics.csv`)
        .send(csvFile);*/
        return new Response(csvFile, {
          headers: {
            "Content-Type": "text/csv",
            "Content-Disposition": `attachment; filename=ObesityDataSet.csv`
          }
        })
    } catch (error) {
      return NextResponse.status(400).json({ error });
    }
}