import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./app/config/react-query"
import { Toaster } from "react-hot-toast"
import { toastOptions } from "./app/config/toast"
import Loader from "./components/atom/Loader"
import App from "./App"
import "app/config/i18n"

import "assets/scss/app.scss"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loader />}>
                <App />
                <Toaster toastOptions={toastOptions} position="bottom-right" />
            </Suspense>
        </QueryClientProvider>
    </React.StrictMode>,
)
