# Project Folder Structure

```bash

YourAppName/
│
├── android/                     # Native Android code
├── ios/                         # Native iOS code
├── app/                         # Main source folder
│   ├── assets/                  # Fonts, images, animations, etc.
│   ├── components/              # Reusable UI components
│   ├── constants/               # App-wide constants
│   ├── hooks/                   # Reusable hooks (custom or react-query, etc.)
│   ├── layouts/                 # Shared layouts (headers, containers)
│   ├── navigation/              # React Navigation setup
│   ├── screens/                 # App screens, structured by feature/module
│   ├── services/                # API services, network layer
│   ├── store/                   # Redux or Zustand or RTK setup
│   ├── themes/                  # Colors, typography, spacing
│   ├── types/                   # Global TypeScript types
│   ├── utils/                   # Helper functions
│   ├── middlewares/            # Redux or API middlewares
│   └── App.tsx                 # Root component
│
├── mock/                        # Mock data for dev/testing
├── tests/                       # Unit & integration tests (can also colocate)
├── .env                         # Environment variables
├── .eslintrc.js                 # Linter config
├── .prettierrc                  # Prettier config
├── tsconfig.json                # TypeScript config
├── babel.config.js              # Babel config
└── package.json
```
