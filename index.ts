async function main(fileName: string) {
  await import(`./codes/${fileName}`);
}

main(process.argv[2]);