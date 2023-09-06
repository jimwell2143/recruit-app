/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({ project, type, color, projectBoronganClassName }) => {
  return (
    <>
      {(project === "bayombong" ||
        project === "bohol" ||
        project === "borongan" ||
        project === "catarman" ||
        project === "cauayan" ||
        project === "e-GMP-colored" ||
        project === "e-GMP-white" ||
        project === "las-pi-as" ||
        project === "lipa" ||
        project === "manila" ||
        project === "solano") && (
        <div className={`logo project-borongan-2 ${project} type-7-${type} ${color} ${projectBoronganClassName}`}>
          {((color === "white" && project === "e-GMP-colored") ||
            (color === "white" && project === "e-GMP-white") ||
            project === "bayombong" ||
            project === "bohol" ||
            (project === "borongan" && type === "ads") ||
            (project === "borongan" && type === "default") ||
            project === "catarman" ||
            project === "cauayan" ||
            (project === "e-GMP-colored" && type === "seal") ||
            (project === "e-GMP-white" && type === "seal") ||
            project === "las-pi-as" ||
            project === "lipa" ||
            (project === "manila" && type === "ads") ||
            (project === "manila" && type === "default") ||
            project === "solano") && (
            <div className="div-2">
              {(project === "borongan" ||
                (project === "e-GMP-colored" && type === "ads") ||
                (project === "e-GMP-colored" && type === "default") ||
                (project === "e-GMP-white" && type === "ads") ||
                (project === "e-GMP-white" && type === "default") ||
                project === "manila") && (
                <>
                  <img
                    className="seal"
                    alt="Seal"
                    src={
                      project === "e-GMP-colored" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-13@2x.png"
                        : project === "e-GMP-white" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-15@2x.png"
                        : type === "default" && project === "manila"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-23@2x.png"
                        : project === "borongan" && type === "ads"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-30@2x.png"
                        : project === "e-GMP-colored" && type === "ads"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-34@2x.png"
                        : type === "ads" && project === "e-GMP-white"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-36@2x.png"
                        : type === "ads" && project === "manila"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-39@2x.png"
                        : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-17@2x.png"
                    }
                  />
                  <img
                    className="text"
                    alt="Text"
                    src={
                      project === "e-GMP-colored" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-14@2x.png"
                        : project === "e-GMP-white" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-16@2x.png"
                        : project === "borongan" && color === "white" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-8.svg"
                        : color === "colored" && type === "default" && project === "manila"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-14.svg"
                        : color === "white" && type === "default" && project === "manila"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-15.svg"
                        : project === "borongan" && color === "colored" && type === "ads"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-16.svg"
                        : project === "borongan" && type === "ads" && color === "white"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-23.svg"
                        : project === "e-GMP-colored" && type === "ads"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-35@2x.png"
                        : type === "ads" && project === "e-GMP-white"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-37@2x.png"
                        : color === "colored" && type === "ads" && project === "manila"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-30.svg"
                        : type === "ads" && color === "white" && project === "manila"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-31.svg"
                        : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text.svg"
                    }
                  />
                </>
              )}

              {((project === "bayombong" && type === "ads") ||
                (project === "bayombong" && type === "default") ||
                (project === "bohol" && type === "ads") ||
                (project === "bohol" && type === "default") ||
                (project === "catarman" && type === "ads") ||
                (project === "catarman" && type === "default") ||
                (project === "cauayan" && type === "ads") ||
                (project === "cauayan" && type === "default") ||
                (project === "las-pi-as" && type === "ads") ||
                (project === "las-pi-as" && type === "default") ||
                (project === "lipa" && type === "ads") ||
                (project === "lipa" && type === "default") ||
                (project === "solano" && type === "ads") ||
                (project === "solano" && type === "default")) && (
                <>
                  <div className="seal-2">
                    {project === "lipa" && (
                      <div className="logo-2">
                        <div className="g-wrapper">
                          <div className="g-38">
                            <div className="overlap">
                              <div className="overlap-group">
                                <img
                                  className="circle"
                                  alt="Circle"
                                  src={
                                    type === "ads"
                                      ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/circle19014-0-3.svg"
                                      : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/circle19014-0-1.svg"
                                  }
                                />
                                <img
                                  className="img"
                                  alt="Text"
                                  src={
                                    type === "ads"
                                      ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text19046-9-3@2x.png"
                                      : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text19046-9-1@2x.png"
                                  }
                                />
                                <img
                                  className="flowroot"
                                  alt="Flowroot"
                                  src={
                                    type === "ads"
                                      ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/flowroot46494-9-3@2x.png"
                                      : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/flowroot46494-9-1@2x.png"
                                  }
                                />
                                <img
                                  className="flowroot-2"
                                  alt="Flowroot"
                                  src={
                                    type === "ads"
                                      ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/flowroot46502-6-3@2x.png"
                                      : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/flowroot46502-6-1@2x.png"
                                  }
                                />
                                <img
                                  className="flowroot-3"
                                  alt="Flowroot"
                                  src={
                                    type === "ads"
                                      ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/flowroot46510-6-3@2x.png"
                                      : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/flowroot46510-6-1@2x.png"
                                  }
                                />
                                <img
                                  className="text-2"
                                  alt="Text"
                                  src={
                                    type === "ads"
                                      ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text41173-9-3@2x.png"
                                      : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text41173-9-1@2x.png"
                                  }
                                />
                                <div className="g">
                                  <div className="overlap-2">
                                    <img
                                      className="g-2"
                                      alt="G"
                                      src={
                                        type === "ads"
                                          ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g41252-0-3@2x.png"
                                          : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g41252-0-1@2x.png"
                                      }
                                    />
                                    <img
                                      className="path"
                                      alt="Path"
                                      src={
                                        type === "ads"
                                          ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path9942-3.svg"
                                          : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path9942-1.svg"
                                      }
                                    />
                                    <img
                                      className="path-2"
                                      alt="Path"
                                      src={
                                        type === "ads"
                                          ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path9944-3.svg"
                                          : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path9944-1.svg"
                                      }
                                    />
                                    <img
                                      className="g-3"
                                      alt="G"
                                      src={
                                        type === "ads"
                                          ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5725-8-4-3@2x.png"
                                          : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5725-8-4-1@2x.png"
                                      }
                                    />
                                    <div className="overlap-wrapper">
                                      <div className="overlap-3">
                                        <img
                                          className="g-4"
                                          alt="G"
                                          src={
                                            type === "ads"
                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5809-3-1-3@2x.png"
                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5809-3-1-1@2x.png"
                                          }
                                        />
                                        <img
                                          className="path-3"
                                          alt="Path"
                                          src={
                                            type === "ads"
                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path9946-3.svg"
                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path9946-1.svg"
                                          }
                                        />
                                        <img
                                          className="path-4"
                                          alt="Path"
                                          src={
                                            type === "ads"
                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path35313-6-3.svg"
                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path35313-6-1.svg"
                                          }
                                        />
                                        <img
                                          className="path-5"
                                          alt="Path"
                                          src={
                                            type === "ads"
                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path35323-3-3.svg"
                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path35323-3-1.svg"
                                          }
                                        />
                                        <img
                                          className="path-6"
                                          alt="Path"
                                          src={
                                            type === "ads"
                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path35334-8-3.svg"
                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path35334-8-1.svg"
                                          }
                                        />
                                        <div className="overlap-group-wrapper">
                                          <div className="overlap-4">
                                            <img
                                              className="g-5"
                                              alt="G"
                                              src={
                                                type === "ads"
                                                  ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g7666-9-0-3@2x.png"
                                                  : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g7666-9-0-1@2x.png"
                                              }
                                            />
                                            <div className="div-wrapper">
                                              <div className="overlap-5">
                                                <div className="g-6">
                                                  <div className="overlap-6">
                                                    <img
                                                      className="g-7"
                                                      alt="G"
                                                      src={
                                                        type === "ads"
                                                          ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g7524-0-4-3@2x.png"
                                                          : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g7524-0-4-1@2x.png"
                                                      }
                                                    />
                                                    <div className="g-8">
                                                      <div className="overlap-group-2">
                                                        <img
                                                          className="g-9"
                                                          alt="G"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5630-2-7-3@2x.png"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5630-2-7-1@2x.png"
                                                          }
                                                        />
                                                        <img
                                                          className="path-7"
                                                          alt="Path"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path5367-19-6-3.svg"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path5367-19-6-1.svg"
                                                          }
                                                        />
                                                        <img
                                                          className="path-8"
                                                          alt="Path"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path5367-1-1-9-3.svg"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path5367-1-1-9-1.svg"
                                                          }
                                                        />
                                                        <img
                                                          className="g-10"
                                                          alt="G"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5354-6-0-3@2x.png"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5354-6-0-1@2x.png"
                                                          }
                                                        />
                                                        <img
                                                          className="g-11"
                                                          alt="G"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g4638-7-3-3@2x.png"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g4638-7-3-1@2x.png"
                                                          }
                                                        />
                                                        <img
                                                          className="g-12"
                                                          alt="G"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g4771-4-7-3@2x.png"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g4771-4-7-1@2x.png"
                                                          }
                                                        />
                                                        <img
                                                          className="path-9"
                                                          alt="Path"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path3614-0-1-3.svg"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path3614-0-1-1.svg"
                                                          }
                                                        />
                                                        <img
                                                          className="path-10"
                                                          alt="Path"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path4989-3-6-3.svg"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path4989-3-6-1.svg"
                                                          }
                                                        />
                                                        <img
                                                          className="path-11"
                                                          alt="Path"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path5150-6-8-3.svg"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path5150-6-8-1.svg"
                                                          }
                                                        />
                                                        <img
                                                          className="g-13"
                                                          alt="G"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g4945-7-1-3@2x.png"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g4945-7-1-1@2x.png"
                                                          }
                                                        />
                                                        <img
                                                          className="path-12"
                                                          alt="Path"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path5367-3-2-7-3.svg"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path5367-3-2-7-1.svg"
                                                          }
                                                        />
                                                        <img
                                                          className="g-14"
                                                          alt="G"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5082-8-3-3@2x.png"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5082-8-3-1@2x.png"
                                                          }
                                                        />
                                                        <img
                                                          className="g-15"
                                                          alt="G"
                                                          src={
                                                            type === "ads"
                                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g7478-7-9-3@2x.png"
                                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g7478-7-9-1@2x.png"
                                                          }
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <img
                                                  className="rect"
                                                  alt="Rect"
                                                  src={
                                                    type === "ads"
                                                      ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/rect7645-1-2-3.svg"
                                                      : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/rect7645-1-2-1.svg"
                                                  }
                                                />
                                                <img
                                                  className="path-13"
                                                  alt="Path"
                                                  src={
                                                    type === "ads"
                                                      ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path3663-2-3-3.svg"
                                                      : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path3663-2-3-1.svg"
                                                  }
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <img
                                          className="g-16"
                                          alt="G"
                                          src={
                                            type === "ads"
                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g22670-1-1-3@2x.png"
                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g22670-1-1-1@2x.png"
                                          }
                                        />
                                        <img
                                          className="g-17"
                                          alt="G"
                                          src={
                                            type === "ads"
                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g15039-2-0-3@2x.png"
                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g15039-2-0-1@2x.png"
                                          }
                                        />
                                        <img
                                          className="g-18"
                                          alt="G"
                                          src={
                                            type === "ads"
                                              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g44964-6-3@2x.png"
                                              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g44964-6-1@2x.png"
                                          }
                                        />
                                      </div>
                                    </div>
                                    <img
                                      className="path-14"
                                      alt="Path"
                                      src={
                                        type === "ads"
                                          ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path16636-3.svg"
                                          : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path16636-1.svg"
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                              <img
                                className="path-15"
                                alt="Path"
                                src={
                                  type === "ads"
                                    ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path6410-6-3.svg"
                                    : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path6410-6-1.svg"
                                }
                              />
                              <img
                                className="path-16"
                                alt="Path"
                                src={
                                  type === "ads"
                                    ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path6408-4-3.svg"
                                    : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path6408-4-1.svg"
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <img
                    className="text-3"
                    alt="Text"
                    src={
                      color === "colored" && project === "cauayan" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-2.svg"
                        : color === "colored" && project === "lipa" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-3.svg"
                        : project === "catarman" && color === "colored" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-4.svg"
                        : project === "catarman" && color === "white" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-5.svg"
                        : color === "colored" && project === "las-pi-as" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-6.svg"
                        : color === "white" && type === "default" && project === "solano"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-7.svg"
                        : color === "white" && project === "bohol" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-9.svg"
                        : color === "white" && project === "cauayan" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-10.svg"
                        : color === "white" && type === "default" && project === "lipa"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-11.svg"
                        : color === "white" && project === "las-pi-as" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-12.svg"
                        : color === "colored" && type === "default" && project === "solano"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-13.svg"
                        : color === "colored" && type === "ads" && project === "bohol"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-17.svg"
                        : color === "colored" && type === "ads" && project === "cauayan"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-18.svg"
                        : color === "colored" && type === "ads" && project === "lipa"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-19.svg"
                        : project === "catarman" && color === "colored" && type === "ads"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-20.svg"
                        : color === "colored" && type === "ads" && project === "las-pi-as"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-21.svg"
                        : color === "colored" && type === "ads" && project === "solano"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-22.svg"
                        : type === "ads" && color === "white" && project === "bohol"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-24.svg"
                        : type === "ads" && color === "white" && project === "cauayan"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-25.svg"
                        : type === "ads" && project === "lipa" && color === "white"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-26.svg"
                        : project === "catarman" && type === "ads" && color === "white"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-27.svg"
                        : type === "ads" && color === "white" && project === "las-pi-as"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-28.svg"
                        : type === "ads" && color === "white" && project === "solano"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-29.svg"
                        : color === "white" && project === "bayombong" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-32.svg"
                        : color === "colored" && project === "bayombong" && type === "default"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-33.svg"
                        : color === "colored" && type === "ads" && project === "bayombong"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-34.svg"
                        : type === "ads" && color === "white" && project === "bayombong"
                        ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-35.svg"
                        : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text-1.svg"
                    }
                  />
                </>
              )}

              {project === "lipa" && type === "seal" && (
                <div className="layer-wrapper">
                  <div className="layer">
                    <div className="g-19">
                      <div className="overlap-7">
                        <div className="overlap-8">
                          <img
                            className="circle-2"
                            alt="Circle"
                            src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/circle19014-0-4.svg"
                          />
                          <img
                            className="text-4"
                            alt="Text"
                            src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text19046-9-4@2x.png"
                          />
                          <img
                            className="flowroot-4"
                            alt="Flowroot"
                            src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/flowroot46494-9-4@2x.png"
                          />
                          <img
                            className="flowroot-5"
                            alt="Flowroot"
                            src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/flowroot46502-6-4@2x.png"
                          />
                          <img
                            className="flowroot-6"
                            alt="Flowroot"
                            src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/flowroot46510-6-4@2x.png"
                          />
                          <img
                            className="text-5"
                            alt="Text"
                            src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/text41173-9-4@2x.png"
                          />
                          <div className="g-20">
                            <div className="overlap-9">
                              <img
                                className="g-21"
                                alt="G"
                                src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g41252-0-4@2x.png"
                              />
                              <img
                                className="path-17"
                                alt="Path"
                                src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path9942-4.svg"
                              />
                              <img
                                className="path-18"
                                alt="Path"
                                src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path9944-4.svg"
                              />
                              <img
                                className="g-22"
                                alt="G"
                                src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5725-8-4-4@2x.png"
                              />
                              <div className="g-23">
                                <div className="overlap-10">
                                  <img
                                    className="g-24"
                                    alt="G"
                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5809-3-1-4@2x.png"
                                  />
                                  <img
                                    className="path-19"
                                    alt="Path"
                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path9946-4.svg"
                                  />
                                  <img
                                    className="path-20"
                                    alt="Path"
                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path35313-6-4.svg"
                                  />
                                  <img
                                    className="path-21"
                                    alt="Path"
                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path35323-3-4.svg"
                                  />
                                  <img
                                    className="path-22"
                                    alt="Path"
                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path35334-8-4.svg"
                                  />
                                  <div className="g-25">
                                    <div className="overlap-11">
                                      <img
                                        className="g-26"
                                        alt="G"
                                        src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g7666-9-0-4@2x.png"
                                      />
                                      <div className="g-27">
                                        <div className="overlap-11">
                                          <div className="g-28">
                                            <div className="overlap-group-3">
                                              <img
                                                className="g-7"
                                                alt="G"
                                                src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g7524-0-4-4@2x.png"
                                              />
                                              <div className="g-28">
                                                <div className="overlap-group-3">
                                                  <img
                                                    className="g-29"
                                                    alt="G"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5630-2-7-4@2x.png"
                                                  />
                                                  <img
                                                    className="path-23"
                                                    alt="Path"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path5367-19-6-4.svg"
                                                  />
                                                  <img
                                                    className="path-23"
                                                    alt="Path"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path5367-1-1-9-4.svg"
                                                  />
                                                  <img
                                                    className="g-30"
                                                    alt="G"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5354-6-0-4@2x.png"
                                                  />
                                                  <img
                                                    className="g-31"
                                                    alt="G"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g4638-7-3-4@2x.png"
                                                  />
                                                  <img
                                                    className="g-32"
                                                    alt="G"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g4771-4-7-4@2x.png"
                                                  />
                                                  <img
                                                    className="path-24"
                                                    alt="Path"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path3614-0-1-4.svg"
                                                  />
                                                  <img
                                                    className="path-24"
                                                    alt="Path"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path4989-3-6-4.svg"
                                                  />
                                                  <img
                                                    className="path-25"
                                                    alt="Path"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path5150-6-8-4.svg"
                                                  />
                                                  <img
                                                    className="g-33"
                                                    alt="G"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g4945-7-1-4@2x.png"
                                                  />
                                                  <img
                                                    className="path-26"
                                                    alt="Path"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path5367-3-2-7-4.svg"
                                                  />
                                                  <img
                                                    className="g-34"
                                                    alt="G"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g5082-8-3-4@2x.png"
                                                  />
                                                  <img
                                                    className="g-15"
                                                    alt="G"
                                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g7478-7-9-4@2x.png"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <img
                                            className="rect-2"
                                            alt="Rect"
                                            src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/rect7645-1-2-4.svg"
                                          />
                                          <img
                                            className="path-27"
                                            alt="Path"
                                            src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path3663-2-3-4.svg"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <img
                                    className="g-35"
                                    alt="G"
                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g22670-1-1-4@2x.png"
                                  />
                                  <img
                                    className="g-36"
                                    alt="G"
                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g15039-2-0-4@2x.png"
                                  />
                                  <img
                                    className="g-37"
                                    alt="G"
                                    src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/g44964-6-4@2x.png"
                                  />
                                </div>
                              </div>
                              <img
                                className="path-28"
                                alt="Path"
                                src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path16636-4.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <img
                          className="path-29"
                          alt="Path"
                          src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path6410-6-4.svg"
                        />
                        <img
                          className="path-30"
                          alt="Path"
                          src="https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/path6408-4-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {type === "seal" && ["e-GMP-colored", "e-GMP-white"].includes(project) && (
                <img
                  className="seal-3"
                  alt="Seal"
                  src={
                    project === "e-GMP-white"
                      ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-45@2x.png"
                      : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-52@2x.png"
                  }
                />
              )}
            </div>
          )}

          {((color === "colored" && project === "e-GMP-colored" && type === "ads") ||
            (color === "colored" && project === "e-GMP-colored" && type === "default") ||
            (color === "colored" && project === "e-GMP-white" && type === "ads") ||
            (color === "colored" && project === "e-GMP-white" && type === "default") ||
            (project === "borongan" && type === "seal") ||
            (project === "manila" && type === "seal")) && (
            <img
              className="seal-4"
              alt="Seal"
              src={
                project === "e-GMP-white" && type === "default"
                  ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-21@2x.png"
                  : project === "e-GMP-colored" && type === "ads"
                  ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-28@2x.png"
                  : type === "ads" && project === "e-GMP-white"
                  ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-29@2x.png"
                  : project === "borongan"
                  ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-40@2x.png"
                  : project === "manila"
                  ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-46@2x.png"
                  : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/seal-20@2x.png"
              }
            />
          )}
        </div>
      )}

      {["calamba", "smart-LGU", "smart-city"].includes(project) && (
        <img
          className={`logo project-calamba-type type-66-${type} ${projectBoronganClassName}`}
          alt="Project calamba type"
          src={
            color === "colored" && type === "default" && project === "smart-city"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-smart-city--type-default--color-colored.svg"
              : color === "white" && project === "calamba" && type === "default"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-calamba--type-default--color-white.svg"
              : color === "white" && type === "default" && project === "smart-city"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-smart-city--type-default--color-white.svg"
              : project === "smart-LGU" && color === "colored" && type === "default"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-smart-lgu--type-default--color-colored.svg"
              : project === "smart-LGU" && color === "white" && type === "default"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-smart-lgu--type-default--color-white.svg"
              : color === "colored" && type === "ads" && project === "calamba"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-calamba--type-ads--color-colored.svg"
              : color === "colored" && type === "ads" && project === "smart-city"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-smart-city--type-ads--color-colored.svg"
              : type === "ads" && color === "white" && project === "calamba"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-calamba--type-ads--color-white.svg"
              : type === "ads" && color === "white" && project === "smart-city"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-smart-city--type-ads--color-white.svg"
              : project === "smart-LGU" && color === "colored" && type === "ads"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-smart-lgu--type-ads--color-colored.svg"
              : project === "smart-LGU" && type === "ads" && color === "white"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-smart-lgu--type-ads--color-white.svg"
              : project === "calamba" && type === "seal"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-calamba--type-seal--color-colored.svg"
              : project === "smart-city" && type === "seal"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-smart-city--type-seal--color-colored.svg"
              : project === "smart-LGU" && type === "seal"
              ? "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-smart-lgu--type-seal--color-colored.svg"
              : "https://generation-sessions.s3.amazonaws.com/3de0ef6a066eb0057d666ef0890ab084/img/project-calamba--type-default--color-colored.svg"
          }
        />
      )}
    </>
  );
};

Logo.propTypes = {
  project: PropTypes.oneOf([
    "lipa",
    "manila",
    "smart-LGU",
    "bayombong",
    "calamba",
    "catarman",
    "borongan",
    "e-GMP-white",
    "cauayan",
    "e-GMP-colored",
    "solano",
    "bohol",
    "smart-city",
    "las-pi-as",
  ]),
  type: PropTypes.oneOf(["ads", "seal", "default"]),
  color: PropTypes.oneOf(["white", "colored"]),
};
