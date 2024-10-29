import React, { useState } from "react";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import { FaTrash, FaChevronDown, FaChevronUp } from "react-icons/fa";
import ToggleSwitch from "./components/ToggleSwitch";
import ToggleSwitch2 from "./components/ToggleSwitch2";
import Example from "./components/Example";
import Buttons from "./components/Buttons";
import Buttons2 from "./components/Buttons2";
import Accordion from "./components/Accordion";
import Alert from "./components/Alert";
import Artboard from "./components/Artboard";
import Badge from "./components/Badge";
import Avatar from "./components/Avatar";
import Breadcrumbs from "./components/Breadcrumbs";
import ButtonStart from "./components/ButtonStart";
import Card from "./components/Card";
import Swap from "./components/Swap";
import Link from "./components/Link";
import Stack from "./components/Stack";
import Join from "./components/Join";
import TextArea from "./components/TextArea";
import NextPrev from "./components/NextPrev";
import NavBar from "./components/NavBar";
import CodeMockup from "./components/CodeMockup";
import Footer from "./components/Footer";
import Kbd from "./components/Kbd";
import Tabs from "./components/Tabs";
import Loading from "./components/Loading";
import Skeleton from "./components/Skeleton";
import Toast from "./components/Toast";
import Tooltip from "./components/Tooltip";
import Stat from "./components/Stat";
import Steps from "./components/Steps";
import Progress from "./components/Progress";
import Indicator from "./components/Indicator";
import Divider from "./components/Divider";
import Menu from "./components/Menu";
import Hero from "./components/Hero";

export default function App() {
  const [showIndex, setShowIndex] = useState(0);

  return (
    <div className="flex flex-col space-y-4 h-screen items-center justify-center">
      <div>
        <button
          className="border rounded-lg px-3 py-2 bg-gray-700 text-white "
          onClick={() => setShowIndex(0)}
        >
          Show Counters
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-500 text-black"
          onClick={() => setShowIndex(1)}
        >
          Show ToggleSwitch
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-green-500 text-black"
          onClick={() => setShowIndex(2)}
        >
          Show Example
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-blue-500 text-black"
          onClick={() => setShowIndex(3)}
        >
          Show Buttons
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-yellow-500 text-black"
          onClick={() => setShowIndex(4)}
        >
          Show Accordion
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-orange-500 text-black"
          onClick={() => setShowIndex(5)}
        >
          Show Alert
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-lime-500 text-black"
          onClick={() => setShowIndex(6)}
        >
          Show Artboard
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-orange-300 text-black"
          onClick={() => setShowIndex(7)}
        >
          Show Badge
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-pink-200 text-black"
          onClick={() => setShowIndex(8)}
        >
          Show Avatar
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-gray-200 text-black"
          onClick={() => setShowIndex(9)}
        >
          Show Breadcrumbs
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-yellow-300 text-black"
          onClick={() => setShowIndex(10)}
        >
          Show ButtonStart
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-violet-400 text-black"
          onClick={() => setShowIndex(11)}
        >
          Show Card
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-green-600 text-black"
          onClick={() => setShowIndex(12)}
        >
          Show Swap
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-blue-700 text-black"
          onClick={() => setShowIndex(13)}
        >
          Show Link
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-700 text-black"
          onClick={() => setShowIndex(14)}
        >
          Show Stack
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-orange-700 text-black"
          onClick={() => setShowIndex(15)}
        >
          Show Join
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-gray-400 text-black"
          onClick={() => setShowIndex(16)}
        >
          Show TextArea
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-gray-800 text-black"
          onClick={() => setShowIndex(17)}
        >
          Show NextPrev
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-red-300 text-black"
          onClick={() => setShowIndex(18)}
        >
          Show NavBar
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-green-400 text-black"
          onClick={() => setShowIndex(19)}
        >
          Show CodeMockup
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-violet-200 text-black"
          onClick={() => setShowIndex(20)}
        >
          Show Footer
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-gray-100 text-black"
          onClick={() => setShowIndex(21)}
        >
          Show Kbd
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-200 text-black"
          onClick={() => setShowIndex(22)}
        >
          Show Tabs
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-200 text-black"
          onClick={() => setShowIndex(23)}
        >
          Show Loading
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-200 text-black"
          onClick={() => setShowIndex(24)}
        >
          Show Skeleton
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-200 text-black"
          onClick={() => setShowIndex(25)}
        >
          Show Toast
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-200 text-black"
          onClick={() => setShowIndex(26)}
        >
          Show Tooltip
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-200 text-black"
          onClick={() => setShowIndex(27)}
        >
          Show Stat
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-200 text-black"
          onClick={() => setShowIndex(28)}
        >
          Show Steps
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-200 text-black"
          onClick={() => setShowIndex(29)}
        >
          Show Progress
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-200 text-black"
          onClick={() => setShowIndex(30)}
        >
          Show Indicator
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-200 text-black"
          onClick={() => setShowIndex(31)}
        >
          Show Divider
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-200 text-black"
          onClick={() => setShowIndex(32)}
        >
          Show Menu
        </button>
        <button
          className="border rounded-lg px-3 py-2 bg-purple-200 text-black"
          onClick={() => setShowIndex(33)}
        >
          Show Hero
        </button>
      </div>
      {showIndex === 0 ? (
        <div>
          <Counter />
          <Counter2 />
        </div>
      ) : null}

      {showIndex === 1 ? (
        <div>
          <ToggleSwitch />
          <ToggleSwitch2 />
        </div>
      ) : null}

      {showIndex === 2 ? (
        <div>
          <Example />
        </div>
      ) : null}
      {showIndex === 3 ? (
        <div className="flex flex-col  h-screen items-center justify-center">
          <Buttons />
          <Buttons2 />
        </div>
      ) : null}
      {showIndex === 4 ? (
        <div>
          <Accordion />
        </div>
      ) : null}
      {showIndex === 5 ? (
        <div>
          <Alert />
        </div>
      ) : null}
      {showIndex === 6 ? (
        <div>
          <Artboard />
        </div>
      ) : null}
      {showIndex === 7 ? (
        <div>
          <Badge />
        </div>
      ) : null}
      {showIndex === 8 ? (
        <div>
          <Avatar />
        </div>
      ) : null}
      {showIndex === 9 ? (
        <div>
          <Breadcrumbs />
        </div>
      ) : null}
      {showIndex === 10 ? (
        <div>
          <ButtonStart />
        </div>
      ) : null}
      {showIndex === 11 ? (
        <div>
          <Card />
        </div>
      ) : null}
      {showIndex === 12 ? (
        <div>
          <Swap />
        </div>
      ) : null}
      {showIndex === 13 ? (
        <div>
          <Link />
        </div>
      ) : null}
      {showIndex === 14 ? (
        <div>
          <Stack />
        </div>
      ) : null}
      {showIndex === 15 ? (
        <div>
          <Join />
        </div>
      ) : null}
      {showIndex === 16 ? (
        <div>
          <TextArea />
        </div>
      ) : null}
      {showIndex === 17 ? (
        <div>
          <NextPrev />
        </div>
      ) : null}
      {showIndex === 18 ? (
        <div>
          <NavBar />
        </div>
      ) : null}
      {showIndex === 19 ? (
        <div>
          <CodeMockup />
        </div>
      ) : null}
      {showIndex === 20 ? (
        <div>
          <Footer />
        </div>
      ) : null}
      {showIndex === 21 ? (
        <div>
          <Kbd />
        </div>
      ) : null}
      {showIndex === 22 ? (
        <div>
          <Tabs />
        </div>
      ) : null}
      {showIndex === 23 ? (
        <div>
          <Loading />
        </div>
      ) : null}
      {showIndex === 24 ? (
        <div>
          <Skeleton />
        </div>
      ) : null}
      {showIndex === 25 ? (
        <div>
          <Toast />
        </div>
      ) : null}
      {showIndex === 26 ? (
        <div>
          <Tooltip />
        </div>
      ) : null}
      {showIndex === 27 ? (
        <div>
          <Stat />
        </div>
      ) : null}
      {showIndex === 28 ? (
        <div>
          <Steps />
        </div>
      ) : null}
      {showIndex === 29 ? (
        <div>
          <Progress />
        </div>
      ) : null}
      {showIndex === 30 ? (
        <div>
          <Indicator />
        </div>
      ) : null}
      {showIndex === 31 ? (
        <div>
          <Divider />
        </div>
      ) : null}
      {showIndex === 32 ? (
        <div>
          <Menu />
        </div>
      ) : null}
      {showIndex === 33 ? (
        <div>
          <Hero />
        </div>
      ) : null}
    </div>
  );
}
