
import ToolTip from "./components/ToolTip";
import TextInput from "./textEdits/TextInput";
// import AllNotes from "./notes/allNotes";
import MarkdownTextarea from "./textEdits/testMark";
import { useTimeContext } from "./context/indexContext";


export default function Home() {



  return (
    <section className="page-layout">
{/* <AllNotes /> */}
{/* <TextInput /> */}
{/* <MarkdownTextarea /> */}
<ToolTip />

    </section>
  );
}

    //className="flex min-h-screen flex-col container mx-auto px-24">
