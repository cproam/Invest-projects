import Cors from "next-cors";

export default async function handler(req, res) {
  await Cors(req, res, {
    methods: ["GET", "HEAD"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  // console.log(process.env.DB_HOST);

  let response = await fetch(
    process.env.DB_HOST +
    "?" +
    new URLSearchParams({
      records: "",
    })
  );
  let json = await response.json();
  res.status(200).json({ message: "Форма отправлена", records: json });
}
