

const FileInput = (id)=>{
  return (
    <div style={{ position: 'relative', overflow: 'hidden', display: 'inline-block' }}>
      <input
        type="file"
        className="text-[#3337a3]"
        id={id}
      />
      <label htmlFor={id} className="text-[#3337a3] cursor-pointer" style={{ position: 'absolute', left: '-9999px' }}>Seleccionar archivo</label>
    </div>
  );
}

export default FileInput;