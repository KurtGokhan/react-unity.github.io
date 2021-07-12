import clsx from 'clsx';
import { CodeExample, CodeSpace, CompiledCode } from 'components/code-example';
import { Header } from 'components/header';
import { useGlobalUnity } from 'components/unity';
import { getAllCodes, getCode } from 'lib/code';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import style from './index.module.scss';

interface Props {
  code: CodeSpace;
}

export default function Components({ code }: Props) {
  const [activeCode, setActiveCode] = useState<CompiledCode>();
  const setCompiledCode = useCallback((cc: CompiledCode) => {
    setActiveCode(cc);
  }, [setActiveCode]);

  const { loadUnity, instance: unityRef, container } = useGlobalUnity();
  useEffect(() => loadUnity(null, clsx(style.unityInstance)), [loadUnity]);

  useEffect(() => {
    if (!(activeCode && unityRef)) return;
    if (activeCode.error) return;
    unityRef.SetReactScript(activeCode.compiledCode, activeCode.style);
  }, [activeCode, unityRef]);

  const [unityContainer, setContainerRef] = useState<HTMLDivElement>();

  useEffect(() => {
    if (!container) return;
    if (unityContainer) unityContainer.appendChild(container);
    else container.remove();
  }, [unityContainer, container]);

  return <div className={style.host}>
    <Head>
      <title>Playground</title>
    </Head>

    <Header fullSize />

    <CodeExample code={code} active={true} id={'playground'} className={style.codeExample}
      onChange={setCompiledCode} unityContainerRef={setContainerRef} />
  </div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const codes = await getAllCodes();
  return {
    paths: [
      {
        params: {
          id: [],
        },
      },
      ...codes.map(codeId => ({
        params: {
          id: codeId.split(/[/\\]/g),
        },
      })),
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ code: CodeSpace }> = async ({ params }) => {
  const path = params.id || 'playground';

  const code = await getCode(path);
  return {
    props: {
      code,
    },
  };
};
