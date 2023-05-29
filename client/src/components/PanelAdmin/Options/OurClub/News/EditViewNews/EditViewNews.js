import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllNews, getNews, updateNews } from "../../../../../../store/news";
import "./EditViewNews.css";
import Form from "react-bootstrap/Form";
import useInput from "../../../../../../utils/useInput";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import slugify from "slugify";

const EditViewNews = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [baseImage, setBaseImage] = useState("");

  const newsTitle = useInput();
  const newsDescription = useInput();
  const date = useInput();

  const [slug, setSlug] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getNews(id)).then(() => {
      const generatedSlug = slugify(newsTitle.value, { lower: true });
      setSlug(generatedSlug);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newsRedux = useSelector((state) => state.new);
  const initialStateNewsBody = newsRedux?.newsBody;
  const [newsBody, setNewsBody] = useState("");

  const initialStateDescription = newsRedux?.newsDescription;
  const initialStateTitle = newsRedux?.newsTitle;

  const uploadImage = (e) => {
    const blob = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      setBaseImage(reader.result);
    };
  };

  const handleClick = (baseImage) => {
    let updatedSlug = slug;

    if (newsTitle.value !== newsRedux.newsTitle) {
      const generatedSlug = slugify(newsTitle.value, { lower: true });
      updatedSlug = generatedSlug;
    }

    dispatch(
      updateNews({
        newsTitle:
          newsTitle.value.length === 0
            ? newsRedux.newsTitle
            : newsTitle.value
                .trim()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, ""),
        photo: baseImage === "" ? newsRedux.photo : baseImage,
        date: date.value === "" ? newsRedux.date : date.value,
        newsDescription:
          newsDescription.value.length === 0
            ? newsRedux.newsDescription
            : newsDescription.value,
        newsBody: newsBody === "" ? newsRedux.newsBody : newsBody,
        slug: updatedSlug,
        id: id,
      })
    )
      .then(() =>
        Swal.fire({
          icon: "success",
          title: "Actualizado",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllNews()))
      .then(() => navigate("/admin/ourclub/news"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-container-news">
      <Form onSubmit={handleSubmit}>
        <h1>Noticias</h1>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Foto 800x500px</Form.Label>
          <br></br>
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          ></input>
          {!baseImage ? (
            <img height={"200px"} src={newsRedux?.photo} alt={newsRedux?.id} />
          ) : null}
          <img height={"200px"} src={baseImage} alt="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Título</Form.Label>
          <br></br>
          {initialStateTitle !== "" ? (
            <input
              value={newsTitle.value || initialStateTitle}
              onChange={newsTitle.onChange}
            ></input>
          ) : (
            <input
              value={newsTitle.value}
              onChange={newsTitle.onChange}
            ></input>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>date</Form.Label>
          <br></br>
          <input type="date" placeholder={newsRedux?.date} {...date}></input>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Descripción</Form.Label>
          <br></br>
          {initialStateDescription !== "" ? (
            <textarea
              maxLength="500"
              value={newsDescription.value || initialStateDescription}
              onChange={newsDescription.onChange}
            ></textarea>
          ) : (
            <textarea
              maxLength="500"
              value={newsDescription.value}
              onChange={newsDescription.onChange}
            ></textarea>
          )}
        </Form.Group>
        <h3>Cuerpo de la noticia</h3>
        {newsBody === "" ? (
          <ReactQuill
            theme="snow"
            value={initialStateNewsBody}
            onChange={setNewsBody}
          />
        ) : (
          <ReactQuill theme="snow" value={newsBody} onChange={setNewsBody} />
        )}

        <button
          className="submit"
          type="submit"
          onClick={() => handleClick(baseImage)}
        >
          Guardar
        </button>
      </Form>
    </div>
  );
};

export default EditViewNews;
