# Patronize

Patronize is a secure and feature-rich platform inspired by **[CodeWithHarry](https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w)** that allows users to connect, donate, and manage their profiles seamlessly. Built using modern technologies, Patronize offers a robust and user-friendly experience.

## Features
1. **User Accounts**:
   - Create your account quickly using Google or GitHub authentication.
   - Edit your username, profile picture, and cover picture to personalize your profile.

2. **Secure Payments**:
   - Make and accept payments securely through Razorpay integration.
   - Manage donations with ease, ensuring safe and reliable transactions.

3. **Donation Tracking**:
   - View all donations made to a profile directly on their profile page for transparency and record-keeping.

---

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Payments**: [Razorpay API](https://razorpay.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)

---

## Getting Started

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/NamanS4ini/Patronize.git
   cd patronize
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:
   ```plaintext
   GITHUB_ID = <your_github_client_id>
   GITHUB_SECRET = <your_github_client_secret>
   GOOGLE_ID = <your_google_client_id>
   GOOGLE_SECRET = <your_google_client_secret>
   MONGODB_URI = <your_mongodb_connection_string>
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

---

## How It Works
- **Authentication**: The app uses OAuth via Google and GitHub to ensure secure login.
- **Payments**: Razorpay handles all transactions with industry-standard security protocols.
- **Database**: MongoDB stores user information, transaction records, and more.

---

## Contributing
Contributions are welcome! Please open an issue or submit a pull request if you want to enhance the app or fix any bugs.

---
**Patronize**: A secure and personalized platform for creators and supporters, inspired by CodeWithHarry.
```
Feel free to adjust it further as needed!
