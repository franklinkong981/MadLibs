/* This is the file that tests out the rendering and functionality of the top-level MadLibs component and is the main test file.
In addition to rendering successfully and matching the snapshot, this test also tests the functionality and user flow of the
MadLibs component. */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MadLibs from "./MadLibs.jsx";