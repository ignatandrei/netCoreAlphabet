using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CorrectBadge
{
    /// <summary>
    /// https://github.com/Charmatzis/CreateRightBadgeTiles/blob/master/CreateRightBadgeTiles/Program.cs
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {

            string fileroute = @"C:\Users\Surface1\source\repos\uwpCards\uwpCards\images\BadgeLogo";
             int[] resolutions = new int[] { 100, 125, 150, 200, 400 };
                for (int i = 0; i < resolutions.Length; i++)
                {
                    Console.WriteLine("Start process image " + resolutions[i]);

                    Bitmap bitmap = new Bitmap(fileroute + $".scale-{resolutions[i]}.png");
                    con2Badge(bitmap, fileroute, resolutions[i]);
                    Console.WriteLine("End process image " + resolutions[i]);
                }

        }
         private static void con2Badge(Bitmap img, string filename, int resolution)
        {
            var destImage = new Bitmap(img.Width, img.Height, PixelFormat.Format32bppArgb);
            for (int x = 0; x < img.Width; x++)
            {
                for (int y = 0; y < img.Height; y++)
                {
                    var srcCol = img.GetPixel(x, y);
                    var avgInt = ((((int)srcCol.R + (int)srcCol.G + (int)srcCol.B) / 3) * (int)srcCol.A) / 255;
                    var desCol = Color.FromArgb((byte)avgInt, Color.White);
                    destImage.SetPixel(x, y, desCol);
                }
            }
            destImage.Save(filename + $".new.scale-{resolution}.png", ImageFormat.Png);
        }
    }
}
