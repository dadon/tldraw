import { Tldraw, TldrawApp, TldrawProps, useFileSystem } from '@tldraw/tldraw'
import { useUploadAssets } from './hooks/useUploadAssets'
import * as React from 'react'

declare const window: Window & { app: TldrawApp }

interface EditorProps {
  id?: string
}

const Editor = ({ id = 'home', ...rest }: EditorProps & Partial<TldrawProps>) => {
  const handleMount = React.useCallback((app: TldrawApp) => {
    window.app = app
  }, [])

  const fileSystemEvents = useFileSystem()

  const { onAssetUpload } = useUploadAssets()

  return (
    <div className="tldraw">
      <Tldraw
        id={id}
        autofocus
        onMount={handleMount}
        onAssetUpload={onAssetUpload}
        {...fileSystemEvents}
        {...rest}
      />
    </div>
  )
}

export default Editor
