import connectDB from "@/DB/connectDB";
import User from "@/models/user";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();
      console.log(req.body.email);
      const user = await User.findOne({ email: req.body.email})
      console.log(user);
      return res.status(200).json({ user });
    } catch (error) {
      console.error("HIIIIIIIIIII");
      return res.status(500).json({ error: "Database query failed" });
    }
  }
}
