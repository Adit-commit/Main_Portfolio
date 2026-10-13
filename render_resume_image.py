import fitz # PyMuPDF

doc = fitz.open(r"assets\Aditya_Soni_Resume.pdf")
page = doc[0] # first page
# 2.5x zoom for crisp display
mat = fitz.Matrix(2.5, 2.5)
pix = page.get_pixmap(matrix=mat, alpha=False)
pix.save(r"assets\resume_preview.png")
print("Rendered resume_preview.png successfully!")
