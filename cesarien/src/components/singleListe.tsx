import { Card, CardHeader, CardTitle, CardContent } from "@/src/components/ui/card";
import Image from 'next/image'
import Link from "next/link";

const SingleList = () => {
    return (
    <Link href="/todo">
        <Card className="size-80 p-0 m-5">
            <CardHeader className="flex flex m-5 flex-col items-center justify-center">
                <CardTitle>
                    List Test
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={200}
                    height={200}
                />
            </CardContent>
        </Card>
    </Link>
    )
}

export default SingleList;