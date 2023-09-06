/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Check } from "../../icons/Check";
import { Eye } from "../../icons/Eye";
import { FormRequired } from "../../icons/FormRequired";
import { User145 } from "../../icons/User145";
import "./style.css";

export const InputTextWithIcon = ({
  state,
  leadingIcon,
  trailingIcon,
  label,
  required,
  optional,
  helpText,
  className,
  icon = <User145 className="instance-node-4" color="#B5B5B7" />,
  text = "Placeholder",
}) => {
  return (
    <div className={`input-text-with-icon ${className}`}>
      {((!helpText && !label && optional) || (!helpText && label) || (helpText && !label && !optional)) && (
        <>
          <div className={`label help-text-${helpText} state-6-${state}`}>
            {((label && !optional) || (optional && !label)) && (
              <div className={`label-and-icon label-${label}`}>
                {label && <div className="text-wrapper-8">Label</div>}

                {!label && <>Optional</>}

                {required && <FormRequired className="instance-node-4" />}

                {state === "verified" && label && <Check className="check-instance" />}
              </div>
            )}

            {helpText && leadingIcon && <User145 className="instance-node-4" color="#B5B5B7" />}

            {helpText && (
              <div className="placeholder">
                {["default", "disabled"].includes(state) && <>{text}</>}

                {state === "verified" && <>Lorem</>}

                {["active", "danger"].includes(state) && <>|</>}
              </div>
            )}

            {helpText && trailingIcon && <Eye className="instance-node-4" />}

            {optional && label && (
              <>
                <div className="label-and-icon-2">
                  <div className="text-wrapper-8">Label</div>
                  {required && <FormRequired className="instance-node-4" />}

                  {state === "verified" && <Check className="check-instance" />}
                </div>
                <div className="text-wrapper-9">Optional</div>
              </>
            )}
          </div>
          <div className={`txtbox help-text-0-${helpText} state-8-${state}`}>
            {!helpText && leadingIcon && <User145 className="instance-node-4" color="#B5B5B7" />}

            {!helpText && (
              <div className="placeholder-2">
                {["default", "disabled"].includes(state) && <>{text}</>}

                {state === "verified" && <>Lorem</>}

                {["active", "danger"].includes(state) && <>|</>}
              </div>
            )}

            {((!label && !leadingIcon && optional) ||
              (!label && leadingIcon && optional && state === "danger" && trailingIcon) ||
              (!label && leadingIcon && optional && state === "default" && trailingIcon) ||
              (!label && leadingIcon && optional && state === "disabled" && trailingIcon) ||
              (!label && leadingIcon && optional && state === "verified" && trailingIcon) ||
              (label && !leadingIcon && !optional && state === "default") ||
              (label && !leadingIcon && optional && !required && state === "default") ||
              (label && !leadingIcon && !required && state === "disabled") ||
              (label && !leadingIcon && state === "active") ||
              (label && !leadingIcon && state === "verified") ||
              (label && leadingIcon && !optional && !required && state === "active" && trailingIcon) ||
              (label && leadingIcon && !required && state === "default" && trailingIcon) ||
              (label && leadingIcon && !required && state === "verified" && trailingIcon) ||
              (label && leadingIcon && state === "disabled" && trailingIcon) ||
              (label && state === "danger" && trailingIcon) ||
              (!leadingIcon && required && state === "disabled") ||
              (leadingIcon && !optional && required && state === "active" && trailingIcon) ||
              (leadingIcon && optional && state === "active" && trailingIcon) ||
              (leadingIcon && required && state === "verified" && trailingIcon) ||
              (optional && required && state === "default" && trailingIcon)) && <Eye className="instance-node-4" />}

            {helpText && <p className="text-wrapper-22">This is a help text.</p>}
          </div>
        </>
      )}

      {helpText && (label || optional) && (
        <div className="label-2">
          {(!label || !optional) && (
            <div className={`label-and-icon-3 label-0-${label}`}>
              {label && <div className="text-wrapper-8">Label</div>}

              {!label && <>Optional</>}

              {required && <FormRequired className="instance-node-4" />}

              {label && state === "verified" && <Check className="check-instance" />}
            </div>
          )}

          {optional && label && (
            <>
              <div className="label-and-icon-2">
                <div className="text-wrapper-8">Label</div>
                {required && <FormRequired className="instance-node-4" />}

                {state === "verified" && <Check className="check-instance" />}
              </div>
              <div className="text-wrapper-9">Optional</div>
            </>
          )}
        </div>
      )}

      {((!helpText && !label && !optional) || (helpText && label && !optional) || (helpText && optional)) && (
        <div className={`txtbox-2 state-10-${state}`}>
          {leadingIcon && (helpText || trailingIcon) && <User145 className="instance-node-4" color="#B5B5B7" />}

          {!helpText && !trailingIcon && <>{icon}</>}

          <div className="placeholder-3">
            {["default", "disabled"].includes(state) && <>{text}</>}

            {state === "verified" && <>Lorem</>}

            {["active", "danger"].includes(state) && <>|</>}
          </div>
          {trailingIcon && <Eye className="instance-node-4" />}
        </div>
      )}

      {helpText && (label || optional) && <p className={`p state-12-${state}`}>This is a help text.</p>}
    </div>
  );
};

InputTextWithIcon.propTypes = {
  state: PropTypes.oneOf(["danger", "active", "default", "verified", "disabled"]),
  leadingIcon: PropTypes.bool,
  trailingIcon: PropTypes.bool,
  label: PropTypes.bool,
  required: PropTypes.bool,
  optional: PropTypes.bool,
  helpText: PropTypes.bool,
  text: PropTypes.string,
};
