// @ts-nocheck
/*
 *
 * PreviewImage
 *
 */

import React, { useState } from "react";

import {
  Box,
  TextInput,
  Stack,
  Card,
  CardHeader,
  CardAsset,
  CardTimer,
  Button,
  Tooltip,
} from "@strapi/design-system";

import Pencil from "@strapi/icons/Pencil";
import ExternalLink from "@strapi/icons/ExternalLink";
import Information from "@strapi/icons/Information";

const Index = ({ name, value, attribute, onChange }) => {
  const [copilotImage, setCopilotImage] = useState(value);
  const regexID = /\/photos\/([a-f0-9]+)\//;
  const regexDomain = /^https?:\/\/([^/]+)/;
  const handleOnChange = (event) => {
    setCopilotImage(event.target.value);
    onChange({ target: { name, value: event.target.value, type: "string" } });
  };

  return (
    <Stack
      background="neutral100"
      paddingTop={4}
      paddingBottom={6}
      paddingLeft={4}
      paddingRight={4}
      hiddenXS
      borderColor="neutral200"
      borderStyle="solid"
      borderWidth="1px"
      borderRadius="4px"
      //   shadow="filterShadow"
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "400px",
        }}
        id="third"
      >
        <CardHeader>
          <CardTimer>Preview</CardTimer>
          {copilotImage ? (
            <CardAsset
              src={`https://${regexDomain.exec(copilotImage)[1]}/photos/${
                regexID.exec(copilotImage)[1]
              }/w_400/preview.jpg`}
            />
          ) : (
            <CardAsset>
              <Pencil aria-label="Just a picture" />
            </CardAsset>
          )}
        </CardHeader>
      </Card>
      <Box paddingTop={5} paddingBottom={3}>
        <TextInput
          name={name}
          type="text"
          value={value || ""}
          onChange={handleOnChange}
          placeholder="https://media.glamour.com/photos/64cad056f2d4984422dd4b50/original/pass/billy-huynh-v9bnfMCyKbg-unsplash.jpg?format=original"
          label="Copilot Photo Link"
          labelAction={
            <Tooltip description="Copy/paste the View Original url here.">
              <button
                aria-label="Copy/paste the View Original url here"
                style={{
                  border: "none",
                  padding: 0,
                  background: "transparent",
                }}
              >
                <Information aria-hidden />
              </button>
            </Tooltip>
          }
        />
      </Box>
      <a
        href="https://copilot.condenast.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button endIcon={<ExternalLink />}>Upload Photo</Button>
      </a>
    </Stack>
  );
};

export default Index;
