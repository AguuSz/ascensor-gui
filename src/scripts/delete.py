import os
import sys

dir_paths = os.path.dirname(os.path.realpath(__file__)) + "/faces/"

name = sys.argv
name = str(name)
nombre = "./faces/" + name + ".jpg"

os.remove(name)