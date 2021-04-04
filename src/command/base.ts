import { program } from 'commander';
import { start, build, ans } from 'wx-api-docs';

program
  .command('docs [mode]')
  .description('启动开发模式')
  .option('-m, --mode [mode]', 'mode')
  .action((mode, options) => {
    if (!mode) {
      console.error('No mode specified, mode should be one of "dev | build | ans"');
      return;
    }
    switch (mode.toLowerCase()) {
      case 'start':
        start();
        break;
      case 'build':
        build();
        break;
      case 'ans':
        ans();
        break;
      default:
        console.error('Invalid docs mode, mode should be one of "dev | build | ans"');
    }
  });
