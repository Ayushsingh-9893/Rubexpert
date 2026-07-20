import sys
from rubik_solver import Cube, init_solver, solve

init_solver()

try:
    cube_string = sys.argv[1]

    cube = Cube.from_string(cube_string)

    if cube.is_solved():
        print("")
    else:
        print(solve(cube))

except Exception as e:
    print(f"ERROR: {e}", file=sys.stderr)
    sys.exit(1)