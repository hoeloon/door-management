### 1
```
npx create-next-app@latest
Need to install the following packages:
create-next-app@14.2.5
Ok to proceed? (y) y

√ What is your project named? ... inventory-management-client
√ Would you like to use TypeScript? ... No / Yes                            # Yes
√ Would you like to use ESLint? ... No / Yes                                # Yes
√ Would you like to use Tailwind CSS? ... No / Yes                          # Yes 
√ Would you like to use `src/` directory? ... No / Yes                      # Yes
√ Would you like to use App Router? (recommended) ... No / Yes              # Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes  # No
Creating a new Next.js app in C:\Users\leeho\Documents\project\inventory-management-client.

```

### 2
- x-data-grid, material, emotion/react, emotion/styled : materialUI
- lucide : Icon Library
- numeral : library to manipulate numbers
- recharts : charting library
- uuid : generate a random ID
- axios : make API call
- dotenv: env variable
```
npm i @mui/x-data-grid @mui/material @emotion/react @emotion/styled lucide-react numeral recharts uuid axios dotenv
```

### 3
install types
```
npm i -D @types/node @types/uuid @types/numeral
```

### 4
setting up dark mode
```
npm i -d tw-colors
```

#### vscode short cut 
tsrafce
```
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>page</div>
  )
}

export default page
```
### Redux toolkit
npm i react-redux @reduxjs/toolkit redux-persist