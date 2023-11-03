"use client";

import { Flex, Text, Tokens } from "ui";
import "./HotKeyInfo.css";
import { useEffect, useState } from "react";

export function HotKeyInfo() {
  const [lastScrolled, setLastScrolled] = useState(new Date());
  const [hidden, setHidden] = useState(true);
  const [forceHide, setForceHide] = useState(false);


  useEffect(() => {
    return;
    const container = window.document.querySelector(".app-content");
    const callback = () => {
      setLastScrolled(new Date());
      setHidden(true);
    };
    container?.addEventListener("scroll", callback);
    return () => container?.removeEventListener("scroll", callback);
  });

  useEffect(() => {
    return;
    const timeout = setTimeout(() => {
      setHidden(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [lastScrolled, forceHide]);

  if (forceHide) return <></>;
  return (
    <Flex
      className="hot-key-info-container"
      css={{ display: hidden ? "none" : "block" }}
    >
      <Flex className="hot-key-info">
        <Flex className="hot-key" justify="center">
          <Text css={{ justifySelf: "center", alignSelf: "center" }}>P</Text>
        </Flex>
        <Text css={{ paddingRight: Tokens.SPACING_1 }}>Menu</Text>
        <Flex className="hot-key" justify="center">
          <Text css={{ justifySelf: "center", alignSelf: "center" }}>H</Text>
        </Flex>
        <Text css={{ paddingRight: Tokens.SPACING_1 }}>Home</Text>
        <Flex className="hot-key" justify="center">
          <Text css={{ justifySelf: "center", alignSelf: "center" }}>K</Text>
        </Flex>
        <Text css={{ paddingRight: Tokens.SPACING_1 }}>Scroll up</Text>
        <Flex className="hot-key" justify="center">
          <Text css={{ justifySelf: "center", alignSelf: "center" }}>J</Text>
        </Flex>
        <Text css={{ paddingRight: Tokens.SPACING_1 }}>Scroll down</Text>
      </Flex>
      <Text className="hide-action">
        <span onClick={() => setForceHide(true)}>Hide</span>
      </Text>
    </Flex>
  );
}
