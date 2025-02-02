import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Box, Table, Text } from "gestalt";
import "gestalt/dist/gestalt.css";

const Minute = ({
  id,
  title,
  topic,
  writer,
  parties,
  date,
  meeting_date,
  file,
  image,
}) => {
  return (
    <Table.Row>
      <Table.Cell>
        <Link
          to={{
            pathname: `/minute/${id}`,
            state: {
              title,
              topic,
              writer,
              parties,
              date,
              meeting_date,
              file,
              image,
            },
          }}
        >
          <Text>{title}</Text>
        </Link>
      </Table.Cell>
      <Table.Cell>
        <Text>{writer}</Text>
      </Table.Cell>
      <Table.Cell>
        <Text>{date.substring(0, 10)}</Text>
      </Table.Cell>
    </Table.Row>
  );
};

Minute.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Minute;
