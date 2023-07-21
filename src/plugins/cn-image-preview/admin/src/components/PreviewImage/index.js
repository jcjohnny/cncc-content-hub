// @ts-nocheck
/*
 *
 * PreviewImage
 *
 */

import React, { useState } from "react";

import {
    Field,
    FieldLabel,
    FieldInput,
    Stack,
    Flex,
    Card,
    CardHeader,
    CardAsset,
} from "@strapi/design-system";

import Pencil from "@strapi/icons/Pencil";

const Index = ({ name, value, attribute, onChange }) => {
    const [copilotImage, setCopilotImage] = useState(value);
    const regexID = /\/photos\/([a-f0-9]+)\//;
    const regexDomain = /^https?:\/\/([^/]+)/;
    const handleOnChange = (event) => {
        setCopilotImage(event.target.value);
        onChange({ target: { name, value: event.target.value, type: "string" } });
    };

    return (
        <Stack spacing={1}>
            <Card
                style={{
                    width: "240px",
                }}
                id="third"
            >
                <CardHeader>
                    {copilotImage ? (
                        <CardAsset
                            src={`https://${regexDomain.exec(copilotImage)[1]}/photos/${regexID.exec(copilotImage)[1]
                                }/w_400/preview.jpg`}
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
                        name={name}
                        type="text"
                        placeholder=""
                        value={value || ""}
                        onChange={handleOnChange}
                    />
                </Flex>
            </Field>
        </Stack>
    );
};

export default Index;