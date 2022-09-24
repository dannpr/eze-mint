// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xuJ96AwQwiTrZC9DsK4jCu
// Component: K0hjF132al
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_nft_eaze_mint.module.css"; // plasmic-import: xuJ96AwQwiTrZC9DsK4jCu/projectcss
import sty from "./PlasmicTittle.module.css"; // plasmic-import: K0hjF132al/css

export const PlasmicTittle__VariantProps = new Array();

export const PlasmicTittle__ArgProps = new Array();

function PlasmicTittle__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };

  return (
    <p.Stack
      as={"section"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <h1
        data-plasmic-name={"h1"}
        data-plasmic-override={overrides.h1}
        className={classNames(
          projectcss.all,
          projectcss.h1,
          projectcss.__wab_text,
          sty.h1
        )}
      >
        {"Eze Mint"}
      </h1>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "h1"],
  h1: ["h1"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTittle__ArgProps,
          internalVariantPropNames: PlasmicTittle__VariantProps
        }),

      [props, nodeName]
    );

    return PlasmicTittle__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTittle";
  } else {
    func.displayName = `PlasmicTittle.${nodeName}`;
  }
  return func;
}

export const PlasmicTittle = Object.assign(
  // Top-level PlasmicTittle renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    // Metadata about props expected for PlasmicTittle
    internalVariantProps: PlasmicTittle__VariantProps,
    internalArgProps: PlasmicTittle__ArgProps
  }
);

export default PlasmicTittle;
/* prettier-ignore-end */
