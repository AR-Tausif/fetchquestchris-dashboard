import JoditEditor from "jodit-react";
import { useCallback, useMemo, useState } from "react";
import { PrimaryButton } from "../components";

export const TermsOfUse = () => {
  const [content, setContent] = useState("");
  // const appendLog = useCallback(
  //   (message) => {
  //     const newLogs = [...logs, message];
  //     setLogs(newLogs);
  //   },
  //   [logs, setLogs]
  // );

  const config = useMemo(
    () => ({
      readonly: false,
      uploader: { insertImageAsBase64URI: true },
      height: "76vh",
    }),
    []
  );

  const onBlur = useCallback(
    (newContent: string) => {
      // appendLog(`onBlur triggered with ${newContent}`);
      setContent(newContent);
    },
    [setContent]
  );
  return (
    <div>
      <h3>Terms Of Use</h3>
      <div
        style={{
          background: "#fdfdfd",
          padding: 8,
          borderRadius: 8,
          marginTop: 20,
        }}
      >
        <div>
          <JoditEditor
            value={content}
            config={config}
            tabIndex={1}
            onBlur={onBlur}
            // onChange={onChange}
          />
          {/* <h3>Logs</h3>
          <div>
            {logs.map((log, index) => (
              <p key={index}>{log}</p>
            ))}
          </div> */}
        </div>
        <PrimaryButton styles={{ width: "100%" }}>Save Changes</PrimaryButton>
      </div>
    </div>
  );
};
