import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "../types";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

export default function NoteForm(props: NoteFormProps) {
  const { onSubmit } = props;

  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                ref={titleRef}
                required
                type="text"
                placeholder="Enter title"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tag</Form.Label>
              <CreatableReactSelect
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                isMulti
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control ref={markdownRef} required as="textarea" rows={15} />
        </Form.Group>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit">Save</Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}
