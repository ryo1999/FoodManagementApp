import dynamic from "next/dynamic"
import React from "react"
// import AppTopbar from "@/components/molecules/appTopbar"
const AppTopbar = dynamic(() => import("@/components/molecules/appTopbar"), {
    ssr: false,
})
const HomeContent = dynamic(() => import("@/components/organisms/homeContent"), {
    ssr: false,
})

const Home: React.FC = () => {
    return (
        <>
            <AppTopbar page="ホーム">
                <HomeContent />
            </AppTopbar>
        </>
    )
}
export default Home
