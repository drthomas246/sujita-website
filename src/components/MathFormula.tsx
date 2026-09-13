import { renderToString } from 'katex'

type MathFormulaProps = {
  tex: string
  className?: string
  displayMode?: boolean
}

export function MathFormula({ tex, className, displayMode = false }: MathFormulaProps) {
  const markup = renderToString(tex, {
    displayMode,
    output: 'htmlAndMathml',
    strict: 'warn',
    throwOnError: false,
    trust: false,
  })

  return <span className={className} dangerouslySetInnerHTML={{ __html: markup }} />
}
