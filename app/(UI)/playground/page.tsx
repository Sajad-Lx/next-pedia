import { Metadata } from "next"

import { Icons } from "@/components/Icons"
import { Button } from "@/components/material-ui/Buttons/Button"
import { FAB } from "@/components/material-ui/Buttons/FAB"
import { IconButton } from "@/components/material-ui/Buttons/IconButton"
import {
  FirstSegmentButton,
  LastSegmentButton,
  SegmentButtonGroup,
  SegmentButtons,
} from "@/components/material-ui/Buttons/SegmentButton"

export const metadata: Metadata = {
  title: "UI Playground",
  description: "Testing ground for UI",
}

export default function UIPlayground() {
  return (
    <div>
      <h1 className="text-5xl m-4 border-b">UI Playground</h1>

      <div className="container">
        <h2 className="text-2xl mb-2">Buttons</h2>
        <div className="grid grid-flow-row-dense grid-cols-3 gap-2">
          <Button>👋🏻 Default</Button>
          <Button variant={"outlined"}>Outlined</Button>
          <Button variant={"elevated"}>Elevated</Button>
          <Button variant={"tonal"}>Tonal</Button>
          <Button variant={"text"}>Text</Button>
        </div>
        <br />
        <div className="space-x-4 space-y-4">
          <Button size={"sm"}>👋🏻 Default</Button>
          <Button size={"sm"} variant={"outlined"}>
            Outlined
          </Button>
          <Button size={"sm"} variant={"elevated"} disabled>
            Disabled
          </Button>
          <Button size={"sm"} variant={"tonal"}>
            Tonal
          </Button>
          <Button size={"sm"} variant={"text"}>
            Text
          </Button>
          <Button size={"sm"} variant={"text"} disabled>
            Text
          </Button>
        </div>

        <br />
        <h2 className="text-2xl mb-2">FAB</h2>
        <div className="space-x-4 space-y-4">
          <FAB>
            <Icons.plus />
          </FAB>
          <FAB variant={"tertiary"}>
            <Icons.plus />
          </FAB>
          <FAB size={"sm"} variant={"surface"}>
            <Icons.plus />
          </FAB>
          <FAB size={"lg"} variant={"secondary"}>
            <Icons.plus />
          </FAB>
          <br />
          <FAB>
            <Icons.plus /> <span className="pl-2">Default</span>
          </FAB>
          <FAB variant={"tertiary"}>
            <Icons.plus /> <span className="pl-2">Tertiary</span>
          </FAB>
          <FAB size={"sm"} variant={"surface"}>
            <Icons.plus /> <span className="pl-2">Surface</span>
          </FAB>
          <FAB size={"lg"} variant={"secondary"}>
            <Icons.plus /> <span className="pl-2">Secondary</span>
          </FAB>
        </div>
        <br />

        <h2 className="text-2xl mb-2">Icon Button</h2>
        <div className="space-x-4 space-y-4">
          <IconButton variant={"filled"}>
            <Icons.moon />
          </IconButton>
          <IconButton variant={"filled"} size={"sm"}>
            <Icons.moon />
          </IconButton>
          <IconButton variant={"filled"} size={"lg"}>
            <Icons.moon />
          </IconButton>
          <IconButton variant={"filled"} disabled>
            <Icons.moon />
          </IconButton>
          <br />
          <IconButton variant={"tonal"}>
            <Icons.moon />
          </IconButton>
          <IconButton variant={"tonal"} size={"sm"}>
            <Icons.moon />
          </IconButton>
          <IconButton variant={"tonal"} size={"lg"}>
            <Icons.moon />
          </IconButton>
          <IconButton variant={"tonal"} disabled>
            <Icons.moon />
          </IconButton>
          <br />
          <IconButton variant={"outlined"}>
            <Icons.moon />
          </IconButton>
          <IconButton variant={"outlined"} size={"sm"}>
            <Icons.moon />
          </IconButton>
          <IconButton variant={"outlined"} size={"lg"}>
            <Icons.moon />
          </IconButton>
          <IconButton variant={"outlined"} disabled>
            <Icons.moon />
          </IconButton>
          <br />
          <IconButton variant={"standard"}>
            <Icons.moon />
          </IconButton>
          <IconButton variant={"standard"} size={"sm"}>
            <Icons.moon />
          </IconButton>
          <IconButton variant={"standard"} size={"lg"}>
            <Icons.moon />
          </IconButton>
          <IconButton variant={"standard"} disabled>
            <Icons.moon />
          </IconButton>
        </div>

        <br />
        <h2 className="text-2xl mb-2">Segment Buttons</h2>
        <div className="pb-10 space-x-4 space-y-4">
          <SegmentButtonGroup>
            <FirstSegmentButton variant={"elevated"}>
              Button 1
            </FirstSegmentButton>
            <SegmentButtons variant={"elevated"}>Button 2</SegmentButtons>
            <SegmentButtons variant={"elevated"}>Button 3</SegmentButtons>
            <SegmentButtons variant={"elevated"}>Button 4</SegmentButtons>
            <LastSegmentButton variant={"elevated"}>Button 5</LastSegmentButton>
          </SegmentButtonGroup>
          <SegmentButtonGroup>
            <FirstSegmentButton variant={"elevated"}>
              Button 1
            </FirstSegmentButton>
            <SegmentButtons variant={"outlined"}>Button 2</SegmentButtons>
            <SegmentButtons variant={"filled"}>Button 3</SegmentButtons>
            <SegmentButtons variant={"tonal"}>Button 4</SegmentButtons>
            <LastSegmentButton variant={"text"}>Button 5</LastSegmentButton>
          </SegmentButtonGroup>
        </div>
      </div>
    </div>
  )
}
