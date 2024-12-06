export default async function handle(req, res) {
  const object = req.body;
  object.send = 1;

  try {
    let response = await fetch(process.env.DB_HOST, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(object),
    });

    let result = await response.json();
    res.status(200).json({ result: 1, data: result });
  } catch (error) {
    res.status(500).json({ result: 0, errorMessage: error });
  }
}
