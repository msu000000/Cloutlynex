import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  const login = async () =>
