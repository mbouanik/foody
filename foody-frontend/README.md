
# Foody Frontend

Welcome to the Foody Frontend repository! Foody is an innovative application designed to help you manage your meals and exercise routines. This frontend repository is built using React.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Features

- Save your favorite dishes based on diet preferences.
- Discover new recipes by typing ingredients.
- Plan meals based on specific nutrient ratios.
- Choose exercises based on muscle groups, types, and difficulty levels.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/foody-frontend.git
    cd foody-frontend
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Create Environment Variables:**

    Create a `.env` file in the `foody-frontend` directory and add the following variables:

    ```dotenv
    REACT_APP_AUTH0_DOMAIN=""
    REACT_APP_AUTH0_CLIENT_ID=""
    REACT_APP_AUTH0_CALLBACK_URL=window.location.origin

    REACT_APP_SPOONCULAR_API_KEY=""
    REACT_APP_NUTRITIONIX_APP_ID=""
    REACT_APP_NUTRITIONIX_APP_KEY=""

    REACT_APP_API_NINJA=""
    ```

4. **Start the Development Server:**

    ```bash
    npm start
    ```

    The app will be accessible at `http://localhost:3000`.

## Environment Variables

Ensure you set up the required environment variables in the `.env` file. These variables are used for authentication and API access.

```dotenv
REACT_APP_AUTH0_DOMAIN=""
REACT_APP_AUTH0_CLIENT_ID=""
REACT_APP_AUTH0_CALLBACK_URL=window.location.origin

REACT_APP_SPOONCULAR_API_KEY=""
REACT_APP_NUTRITIONIX_APP_ID=""
REACT_APP_NUTRITIONIX_APP_KEY=""

REACT_APP_API_NINJA=""
```

5. **Open Your Browser:**
   - Navigate to `http://localhost:3000` to use Foody.

## Contributing

If you'd like to contribute to Foody.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Submit a pull request.

For major changes, please open an issue first to discuss potential modifications.

## License
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
