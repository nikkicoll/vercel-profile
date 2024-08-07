/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RPP94Y1sSNh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Dog Walking Schedule</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="font-medium">Monday</div>
            <div className="text-muted-foreground">7am - 8am, 6pm - 7pm</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="font-medium">Tuesday</div>
            <div className="text-muted-foreground">7am - 8am, 6pm - 7pm</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="font-medium">Wednesday</div>
            <div className="text-muted-foreground">7am - 8am, 6pm - 7pm</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="font-medium">Thursday</div>
            <div className="text-muted-foreground">7am - 8am, 6pm - 7pm</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="font-medium">Friday</div>
            <div className="text-muted-foreground">7am - 8am, 6pm - 7pm</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="font-medium">Saturday</div>
            <div className="text-muted-foreground">9am - 10am, 4pm - 5pm</div>
          </div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="font-medium">Sunday</div>
            <div className="text-muted-foreground">9am - 10am, 4pm - 5pm</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
