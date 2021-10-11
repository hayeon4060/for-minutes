import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Navigation from "../component/Navigation.js";
import Result from "./Result.js";
import Spinner from "../component/Spinner";
import "./Main.css";

import { Box, Heading, Table, Text, Button, Flex } from "gestalt";
import "gestalt/dist/gestalt.css";

import axios from "axios";

import { useHistory } from "react-router";

const Detail = (props) => {
  const history = useHistory();
  const [pk, setPk] = useState();
  const [topic, setTopic] = useState();
  const [title, setTitle] = useState();
  const [writer, setWriter] = useState("");
  const [parties, setParties] = useState("");
  const [meeting_date, setMeetingDate] = useState(undefined);
  const [date, setDate] = useState();
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPk(props.match.params.id);
    setTitle(props.location.state.title);
    setTopic(props.location.state.topic);
    setMeetingDate(
      props.location.state.meeting_date.substring(0, 10) +
        " " +
        props.location.state.meeting_date.substring(11, 16)
    );
    setDate(props.location.state.date.substring(0, 10));
    setFile(props.location.state.file);
    setImage(
      !props.location.state.image
        ? props.location.state.image
        : props.location.state.image.replace("media", "static")
    );
    setWriter(props.location.state.writer);
    setParties(props.location.state.parties);
  });

  const createResult = async () => {
    let formData = new FormData();
    formData.append("pk", pk);
    setLoading(false);
    const url = `/testapp/result/create/${pk}`;
    await axios
      // .post("/testapp/result/" +this.state.pk+ "/create", formData)
      .post(url, formData)
      .then((res) => {
        setLoading(true);
        window.location.reload();
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        alert("fail");
      });
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까??") === true) {
      axios.delete(`/testapp/meeting/${pk}/delete`).then((res) => {
        console.log(res.data);
        history.push("/minutes");
      });
    }
  };

  return (
    <div class="bg wrapper">
      <Navigation />
      <div class="main-content">
        <Box
          display="flex"
          padding={10}
          marginStart={-3}
          marginEnd={-3}
          marginBottom={-3}
          marginTop={-3}
          wrap
          width="100%"
          direction="column"
          alignContent="center"
          alignSelf="center"
        >
          <Box flex="grow" paddingX={3} paddingY={4} rounding={3} color="white">
            <Heading size="md" color="midnight" align="center">
              Title: {title}
            </Heading>
          </Box>
          <Box
            justifyContent="end"
            marginStart={-1}
            marginEnd={-1}
            marginTop={-1}
            marginBottom={-1}
            display="flex"
            wrap
          >
            <Box paddingX={1} paddingY={1}>
              <Link
                to={{
                  pathname: `/minute/update/${pk}/`,
                  state: {
                    title: title,
                    topic: topic,
                    writer: writer,
                    parties: parties,
                    date: date,
                    meeting_date: meeting_date,
                    file: file,
                    image: image,
                  },
                }}
              >
                <Button text="수정" color="transparent" />
              </Link>
            </Box>
            <Box paddingX={1} paddingY={1}>
              <Button text="삭제" color="transparent" onClick={handleDelete} />
            </Box>
          </Box>
          <br />
          <Box width="70%" margin="auto" marginBottom={10}>
            <Table>
              <Table.Row>
                <Table.Cell>
                  <Text color="midnight" weight="bold">
                    회의 안건
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{topic}</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text color="midnight" weight="bold">
                    작성자
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{writer}</Text>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Text color="midnight" weight="bold">
                    게시일
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{date}</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text color="midnight" weight="bold">
                    회의 날짜
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{meeting_date}</Text>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Text color="midnight" weight="bold">
                    참석자
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{parties}</Text>
                </Table.Cell>
              </Table.Row>
            </Table>
            {/* <Box display="flex" padding={3} wrap direction="row">
              <Text color="midnight" weight="bold" inline>
                사진
              </Text>
              &nbsp;&nbsp;&nbsp;
              <img width="50%" src={image} inline />
            </Box> */}
          </Box>
          <Box flex="grow" paddingX={3} paddingY={3}>
            <Box
              justifyContent="center"
              marginStart={-1}
              marginEnd={-1}
              marginTop={-1}
              marginBottom={-1}
              display="flex"
              wrap
            >
              <Box paddingX={1} paddingY={1}>
                {loading ? (
                  <Button
                    type="button"
                    onClick={createResult}
                    text="Result 결과"
                    inline
                  ></Button>
                ) : (
                  <Spinner />
                )}
              </Box>
            </Box>
          </Box>
          <Box padding={10}>
            <Result pk={pk}></Result>
          </Box>
        </Box>
      </div>

      <Footer />
    </div>
  );
};

export default Detail;
