import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  hasRadii?: boolean
  hasSpaces?: boolean
}

export function TokensGrid({
  tokens,
  hasRemValue = false,
  hasRadii = false,
  hasSpaces = false,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {hasRadii && <th>Radius</th>}
          {hasSpaces && <th>Spaces</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
              {hasRadii && (
                <td>
                  <div
                    style={{
                      width: '4rem',
                      height: '4rem',
                      backgroundColor: '#ccc',
                      borderRadius: value,
                    }}
                  ></div>
                </td>
              )}
              {hasSpaces && (
                <td style={{ width: '15rem' }}>
                  <div
                    style={{
                      width: value,
                      height: '1rem',
                      backgroundColor: '#00875F',
                    }}
                  ></div>
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
