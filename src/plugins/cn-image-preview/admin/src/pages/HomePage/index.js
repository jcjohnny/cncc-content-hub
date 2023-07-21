// @ts-nocheck
/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import {
  Field,
  FieldLabel,
  FieldHint,
  FieldError,
  FieldInput,
  FieldAction,
  Layout,
  Flex,
} from "@strapi/design-system";

import {
  Card,
  CardHeader,
  CardBody,
  CardCheckbox,
  CardAction,
  CardAsset,
  CardTimer,
  CardContent,
  CardBadge,
  CardTitle,
  CardSubtitle,
} from "@strapi/design-system";

import Pencil from "@strapi/icons/Pencil";

const HomePage = () => {
  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const regex = /\/photos\/([\w\d]+)$/;
    const match = value.match(regex);
    const extractedId = match ? match[1] : "";
    setId(extractedId);
  }, [value]);

  return (
    <Layout>
      <Card
        style={{
          width: "240px",
        }}
        id="third"
      >
        <CardHeader>
          {id ? (
            <CardAsset
              src={`https://assets.vogue.com/photos/${id}/w_400/sample.jpg`}
            />
          ) : (
            <CardAsset>
              <Pencil aria-label="Just a picture" />
            </CardAsset>
          )}
        </CardHeader>
      </Card>
      <Field name="copilot-url">
        <Flex direction="column" alignItems="flex-start" gap={1}>
          <FieldLabel>Copilot Image</FieldLabel>
          <FieldInput
            type="text"
            placeholder=""
            value={value}
            onChange={handleOnChange}
          />
        </Flex>
      </Field>
    </Layout>
  );
};

export default HomePage;